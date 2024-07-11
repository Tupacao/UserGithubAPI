import { Text, Box, Button, Link } from "@chakra-ui/react";

const ErrorPage = () => {
    return (
      <Box textAlign={"center"} p={"20px 0px"}>
        <Text>Algo de errado não está certo</Text>
        <Text>Por favor tente recarregar novamente ou volte clique neste botão</Text>
        <Link href="/">
          <Button variant={"solid"}>Clique Aqui</Button>
          </Link>
      </Box>
    );
  };
  
  export default ErrorPage;