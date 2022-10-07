import {
  defineDocumentType,
  LocalDocument,
  makeSource,
} from "contentlayer/source-files";

const StaticPage = defineDocumentType(() => ({
  name: "StaticPage",
  filePathPattern: `static/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the static page",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the static page",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (staticPage) => {
        // const [, filename, _fileext] = /static\/(.*)\.(\w+)$/.exec(
        const [, filename] = /static\/(.*)$/.exec(
          staticPage._raw.flattenedPath,
        );

        return `/${filename}`;
      },
    },
  },
}));

const Post = defineDocumentType(() => {
  const HEADING_REGEX = /(#{1,6} .*)\r?\n/g;
  const H1_TAG_REGEX = /<h1>(.*)<\/h1>/g;
  const ACIKKAYNAK_CONTENT_PATH = "acikkaynak/Icerik/";

  enum Topic {
    acik_kaynak_gelistirme = "Açık Kaynak Geliştirme",
    acik_kaynak_yazilim = "Açık Kaynak Yazılım",
    katilim = "Katılım",
    organizasyon = "Organizasyon",
    DEFAULT = "Açık Kaynak",
  }

  const getHeading = (post: LocalDocument) =>
    // parse markdown and get first # heading
    Array.from(post.body.raw.matchAll(HEADING_REGEX), (m) => m[1])[0].replace(
      "# ",
      "",
    );

  return {
    name: "Post",
    filePathPattern: `${ACIKKAYNAK_CONTENT_PATH}**/!(README).md`,
    fields: {
      title: {
        type: "string",
        description: "The title of the post",
      },
      date: {
        type: "date",
        description: "The date of the post",
      },
      excerpt: {
        type: "string",
        description: "The excerpt of the post",
      },
    },
    computedFields: {
      title: {
        type: "string",
        description: "The title of the post",
        resolve: (post) => {
          post.title = getHeading(post);
          return post.title;
        },
      },
      url: {
        type: "string",
        description: "The url of the post",
        resolve: (post) => {
          // TODO: slugify based on post.title

          return `/${post._raw.flattenedPath
            .replace(ACIKKAYNAK_CONTENT_PATH, "")
            .replace(/\/|_/g, "-")}`; // replace / and _ to -
        },
      },
      topic: {
        type: "string",
        description: "The topic of the post",
        resolve: (post) => {
          return (
            Topic[
              post._raw.sourceFileDir.replace(ACIKKAYNAK_CONTENT_PATH, "") // get topic folder (snake_case)
            ] ?? Topic.DEFAULT
          );
        },
      },
      body: {
        type: "string",
        description: "The body of the post",
        resolve: (post) => {
          post.body.html = post.body.html.replace(H1_TAG_REGEX, ""); // delete h1 tag
          return post.body;
        },
      },
      excerpt: {
        type: "string",
        description: "The excerpt of the post",
        resolve: (post) => {
          return post.body.html
            .replace(/(<([^>]+)>)/gi, "") // strip html tags
            .split(" ")
            .slice(0, 50) // get first 50 words
            .join(" ");
        },
      },
    },
  };
});

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [StaticPage, Post],
  onUnknownDocuments: "skip-ignore",
});

export { source, source as default, StaticPage, Post };
