import AuthRepository from "./AuthRepository";
import PaypalRepository from "./PaypalRepository";
const repositories = {
    auth: AuthRepository,
    paypal: PaypalRepository
};
export const RepositoryFactory = {
    get: (name) => repositories[name],
};
