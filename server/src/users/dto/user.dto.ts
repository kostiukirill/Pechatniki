export class CreateUserDto {
  readonly name: string;
  readonly surname: string;
  readonly lastname?: string;
  readonly role: 'admin' | 'curator';
  readonly email: string;
  readonly phone: string;
  readonly telegram: string;
}
