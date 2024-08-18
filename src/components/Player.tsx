import { ChangeEvent, useState } from "react";

interface PlayerProps {
    name: string;
}

export const Player = ({ name }: PlayerProps): JSX.Element => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentName, setCurrentName] = useState<string>(name);

    const handleEditClick = () => {
        setIsEditing((prev) => !prev);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setCurrentName(event.target.value);
        }
    }

    return (
        <li className="player">
            {isEditing ? <input required type="text" value={currentName} onChange={handleNameChange}/> : <p className="player-name">{currentName}</p>}
            <p className="player-symbol">X</p>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};
