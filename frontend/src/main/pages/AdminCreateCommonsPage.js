import React from "react";
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CreateCommonsForm from "main/components/Commons/CreateCommonsForm";
import {createCommons} from "main/services/commons"
import {useMutation} from "react-query";
import { useToasts } from 'react-toast-notifications';

const AdminCreateCommonsPage = () => {
    const {addToast} = useToasts();
    const mutation = useMutation(createCommons,
        {onSuccess: () => {
            addToast("Commons successfully created!", { appearance: 'success' });
        }})
    return (
        <BasicLayout>
            <h2>Create Commons</h2>
            <CreateCommonsForm 
                onSubmit={ (result) => mutation.mutate(result)}
            />
        </BasicLayout>
    );
};

export default AdminCreateCommonsPage;