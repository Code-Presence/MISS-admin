import React from 'react';
import { MenuWithSearchInput } from '../../../components/Collapse';
import { Button } from '@material-tailwind/react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Collaborators(): JSX.Element {
    const navigate = useNavigate();
    const handlePress = () => {
        navigate('/collaborators/register');
    };

    return (
        <>
            <div className="w-full h-12 flex flex-row-reverse animate-fade-in-down">
                <MenuWithSearchInput />

                <Button
                    className="flex items-center gap-3 bg-deep-purple-400 mr-4"
                    onClick={handlePress}
                >
                    <Plus size={20} />
          Novo Colaborador
                </Button>
            </div>
        </>
    );
}

export default Collaborators;