import styled from "styled-components";

const TelaStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f3f3;
`;

const Card = styled.div`
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 350px;
`;

const Title = styled.h2`
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 14px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-size: 14px;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #28a745;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #218838;
    }
`;

const Link = styled.a`
    display: block;
    text-align: right;
    font-size: 12px;
    color: #007bff;
    text-decoration: none;
    margin-bottom: 15px;

    &:hover {
        text-decoration: underline;
    }
`;

const FooterText = styled.p`
    text-align: center;
    font-size: 14px;

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default function Home() {
    return (
        <TelaStyled>
            <Card>
                <Title>Login</Title>
                <Label>Email</Label>
                <Input type="email" placeholder="Digite seu email" />
                <Label>Senha</Label>
                <Input type="password" placeholder="Digite sua senha" />
                <Link href="#">Esqueceu a senha?</Link>
                <Button>Entrar</Button>
                <FooterText>
                    Não tem conta? <a href="#">Cadastra-se</a>
                </FooterText>
            </Card>
        </TelaStyled>
    );
}
