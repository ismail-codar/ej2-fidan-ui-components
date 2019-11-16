/**
 * @form_state
 */
export interface IUserAccount {
  id?: number;
  login: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  activated?: boolean;
  langKey?: string;
  authorities?: string[];
}
