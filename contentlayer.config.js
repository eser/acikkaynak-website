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
      resolve: (staticPage) => `/${staticPage._raw.flattenedPath}`,
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
      resolve: (story) => `/${story._raw.flattenedPath}`,
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [StaticPage, Story],
});

export { source, source as default, StaticPage, Story };
