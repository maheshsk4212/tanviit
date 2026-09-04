"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, FileText, Upload, X } from "lucide-react";
import { useId, useRef, useState, type DragEvent } from "react";

const ACCEPTED = ".pdf,.doc,.docx";

export function ResumeFileInput({
  name,
  required,
}: {
  name: string;
  required?: boolean;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  function setFile(file: File | undefined) {
    setFileName(file ? file.name : null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0]);
  }

  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && inputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(file);
      inputRef.current.files = dt.files;
      setFile(file);
    }
  }

  function clearFile() {
    setFileName(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <input
        ref={inputRef}
        id={inputId}
        name={name}
        type="file"
        accept={ACCEPTED}
        required={required}
        onChange={handleChange}
        className="sr-only"
      />
      <AnimatePresence mode="wait" initial={false}>
        {!fileName ? (
          <motion.label
            key="empty"
            htmlFor={inputId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-control border-2 border-dashed px-6 py-8 text-center transition-colors ${
              dragging
                ? "border-gold-400 bg-gold-50/60"
                : "border-line-strong hover:border-fg-subtle hover:bg-surface-sunken"
            }`}
          >
            <Upload className={`h-6 w-6 ${dragging ? "text-gold-500" : "text-fg-subtle"}`} aria-hidden />
            <span className="text-sm font-medium text-fg">
              {dragging ? "Drop your resume" : "Click or drag your resume here"}
            </span>
            <span className="text-xs text-fg-subtle">PDF or DOCX, up to 10MB</span>
          </motion.label>
        ) : (
          <motion.div
            key="filled"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between rounded-control border border-emerald-200 bg-emerald-50/60 px-4 py-3"
          >
            <span className="flex min-w-0 items-center gap-2 text-sm text-fg">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden />
              <FileText className="h-4 w-4 shrink-0 text-ink-500" aria-hidden />
              <span className="truncate">{fileName}</span>
            </span>
            <button
              type="button"
              onClick={clearFile}
              className="ml-3 shrink-0 rounded-full p-1 text-fg-subtle hover:bg-line hover:text-fg-muted"
              aria-label="Remove file"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
