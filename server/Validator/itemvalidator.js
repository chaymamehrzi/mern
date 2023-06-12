const yup =require ('yup');
const itemvalidator= yup.object().shape({
    title: yup.string().max(10,"title must not pass 10 caracters").required(),
    description: yup.string().min(5,"desciption must not be less than 5 caracters ").max(50,"description must not be more than 50 caractere").required(),
});
module.exports=itemvalidator;