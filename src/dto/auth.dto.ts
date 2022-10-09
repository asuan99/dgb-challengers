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
  refreshToken : string;
  user_seq : string;
}

export type { SignUpDto, SignInDto , TokenDto };