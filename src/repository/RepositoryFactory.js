import AuthRepository from "./AuthRepository";
import StatsRepository from "./StatsRepository";
import PaypalRepository from "./PaypalRepository";
const repositories = {
    auth: AuthRepository,
    paypal: PaypalRepository,
    stats: StatsRepository,
};
export const RepositoryFactory = {
    get: (name) => repositories[name],
};
