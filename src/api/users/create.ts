import axios from 'axios';

interface Address {
    line1: string;
    line2?: string;
    line3?: string;
    postalCode: string;
    neighborhood: string;
    state: string;
  }
  
  interface IUserProps {
    name: string;
    document: string;
    email: string;
    phone: string;
    bornAt: string;
    password: string;
    address: Address;
  }

const createUser = async ({
    name,
    document,
    email,
    phone,
    bornAt,
    password,
    address,
}: IUserProps) => {
    const userData = {
        name: name,
        document: document,
        email: email,
        phone: phone,
        bornAt: bornAt,
        password: password,
        address: {
            line1: address.line1,
            line2: address.line2,
            line3: address.line3,
            postalCode: address.postalCode,
            neighborhood:address.neighborhood,
            state: address.state,
        },
    };

    try {
        const response = await axios.post('/users', userData);

        console.log('Usuário criado com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
};

export { createUser };
