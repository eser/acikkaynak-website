import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

const Story = defineDocumentType(() => ({
  name: "Story",
  filePathPattern: `stories/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the story",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the story",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (story) => {
        // const [, filename, _fileext] = /stories\/(.*)\.(\w+)$/.exec(
        const [, filename] = /stories\/(.*)$/.exec(
          story._raw.flattenedPath,
        );

        return `/stories/${filename}`;
      },
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [StaticPage, Story],
});

export { source, source as default, StaticPage, Story };
