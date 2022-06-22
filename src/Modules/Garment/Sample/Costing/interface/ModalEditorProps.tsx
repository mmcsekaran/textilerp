export interface ModalEditorProps<T>
{
    visible :boolean,
    onSave : (value:T) => void;
    onCancel : () => void
}