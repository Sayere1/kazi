import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TipTapEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert max-w-none p-3 min-h-[150px] border border-[#e5e7eb] dark:border-[#2d3748] rounded-lg focus:outline-none bg-white dark:bg-[#0f172a]",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default TipTapEditor;
