import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().min(8).required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
  website: yup.string().required(),
});

export default schema;
