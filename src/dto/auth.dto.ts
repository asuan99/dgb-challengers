interface SignUpDto {
  uesr_email: string;
  user_password: string;
}

interface SignInDto {
  user_email: string;
  user_password: string;
}
interface TokenDto{
  accessToken : string;
}

export type { SignUpDto, SignInDto , TokenDto };