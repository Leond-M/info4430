import { FC } from "react";

export const DivBlurSpinner: FC<{ isLoading: boolean; bgColor: string }> = ({ isLoading, bgColor }) => {
    return (
        <div
            className={`fixed left-0 top-0 flex min-h-full w-full items-start justify-center pt-96 ${bgColor}`}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 999, display: isLoading ? "flex" : "none" }}
        >
            <span className="loading loading-spinner loading-lg text-yellow-500" />
        </div>
    );
};
