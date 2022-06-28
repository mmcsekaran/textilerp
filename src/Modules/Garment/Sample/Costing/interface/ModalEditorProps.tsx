export interface ModalEditorProps<T>
{
    visible :boolean,
    onSave : (prevValue:T ,newValue:T) => void;
    onCancel : () => void
    value?: T
}