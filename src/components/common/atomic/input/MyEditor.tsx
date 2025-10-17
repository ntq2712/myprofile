/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

export default function MyEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    content: "<p>Hello from TipTap!</p>",
    editorProps: {
      attributes: {
        class: "prose focus:outline-none",
      },
    },
    injectCSS: false,
    autofocus: true,
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="space-y-2">
      <div className="flex gap-2 border p-2 rounded bg-gray-50">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "font-bold text-blue-500" : ""}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "italic text-blue-500" : ""}
        >
          I
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "text-blue-500" : ""
          }
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "text-blue-500" : ""}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "text-blue-500" : ""}
        >
          {"</>"}
        </button>
      </div>

      {/* Editor area */}
      <div className="border p-4 rounded min-h-[200px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
