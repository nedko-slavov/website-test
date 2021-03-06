import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { UPDATE_USER } from '../../../graphql/mutations';
import { USERS } from '../../../graphql/queries';
import UserForm from './UserForm';
import { useUserContext } from '../../../providers/UserProvider';
import { useRouter } from 'next/router';
import { IFormValues } from '../../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { FullPageLoader } from '../../Loaders';

const EditUserForm: FC = () => {
  const { selectedUserContext, setUserContext } = useUserContext();
  const router = useRouter();
  const { pid } = router.query;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ defaultValues: selectedUserContext, resolver: yupResolver(schema) });

  const [updateUser, { loading }] = useMutation(UPDATE_USER, {
    onCompleted(user) {
      if (user) {
        setUserContext(user.updateUser);
        router.push(`/user/${user.updateUser.id}`);
      }
    },
  });

  if (loading) return <FullPageLoader />;

  const onSubmit = (data: IFormValues): void => {
    const { name, username, email, phone, website } = data;
    const fields = {
      name,
      username,
      email,
      phone,
      website,
    };

    updateUser({
      variables: { id: pid, input: fields },
      refetchQueries: [{ query: USERS }],
    });
  };

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      submitButonLabel="Edit"
      errors={errors}
    />
  );
};

export default EditUserForm;
