export interface ShapesInterface {
    id: number;
    shape: string;
}

export interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    title: string;
}