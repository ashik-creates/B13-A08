"use client"
import { Button, toast } from '@heroui/react';

const Btn = () => {
    return (
        <Button onPress={()=> toast.success("Enrolled Successfully")} variant="outline">Enroll Now</Button>
    );
};

export default Btn;