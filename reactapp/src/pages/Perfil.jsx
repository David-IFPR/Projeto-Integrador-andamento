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

const Title = styled.h1`
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    font-size: 16px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
`;

export default function Perfil() {
    return (
        <TelaStyled>
            <Card>
                <Title>Meu Perfil</Title>
                <List>
                    <ListItem><strong>Nome:</strong> Fulano da Silva</ListItem>
                    <ListItem><strong>Email:</strong> fulano@email.com</ListItem>
                </List>
            </Card>
        </TelaStyled>
    );
}
