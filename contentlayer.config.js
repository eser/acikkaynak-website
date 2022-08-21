import { defineDocumentType, makeSource } from "contentlayer/source-files";

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
  documentTypes: [Story],
});

export { Story, source, source as default };
