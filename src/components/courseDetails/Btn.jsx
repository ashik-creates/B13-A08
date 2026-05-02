"use client"
import { Button} from '@heroui/react';
import { toast } from 'react-toastify';

const Btn = () => {
    return (
        <Button onClick={()=> toast.success("Enrolled Successfully")} variant="outline">Enroll Now</Button>
    );
};

export default Btn;