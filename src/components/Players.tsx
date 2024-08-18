import { useState } from "react";

export const Player = (): JSX.Element => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEditClick = () => {
        
    }

    return (
        <li>
            <p className="player-name">Player1</p>
            <p className="player-symbol">X</p>
            <button>Edit</button>
        </li>
    );
};
