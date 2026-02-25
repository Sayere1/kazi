import { useComposerStore } from "../../store/message/useComposerStore";

const DropboxModal = () => {
  const isOpen = useComposerStore((s) => s.isDropboxOpen);
  const close = useComposerStore((s) => s.closeDropbox);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-bold mb-4">Dropbox</h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          (Your Dropbox picker UI goes here)
        </p>

        <button
          onClick={close}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DropboxModal;
