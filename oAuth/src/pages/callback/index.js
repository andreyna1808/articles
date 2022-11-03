import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function CallBack() {
  if (typeof window === "undefined") {
    return null;
  }

  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.replace("/");
  }

  return (
    <React.Fragment>
      <main>
        <h1>Sou a função de callBack mostrando que você foi logado com sucesso!</h1>
        <p>Aconteceu o seguinte ao apertar em "Sign in Github" ele vai fazer o direcionamento para logar com o github podemos observar isso com a documentação
          <br />Caro gafanhoto a documentação são as regras do jogo, não se atreva a entrar na brincadeira sem saber as regras.
        </p>
      </main>
    </React.Fragment>
  );
}
