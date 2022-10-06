interface SignUpDto {
  email: string;
  password: string;
  nickname: string;
}

interface SignInDto {
  email: string;
  key: string;
}

export type { SignUpDto, SignInDto };