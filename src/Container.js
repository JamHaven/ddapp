import ReadContractData from "./ReadContractData";
import { drizzleConnect } from '@drizzle/react-plugin';

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        Storage: state.contracts.Storage,
        drizzleStatus: state.drizzleStatus,
    };
};

const Container = drizzleConnect(ReadContractData, mapStateToProps);

export default Container;
