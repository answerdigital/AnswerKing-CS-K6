//This file acts as the main configuration file for a test.
//Here we define the iteration, duration, executor type for a script.
export { getProduct } from "./scenarios/product/get-product"
export { getOrder } from "./scenarios/web/get-order"

export let options = {
    ext: {
        loadimpact: {
            projectID: __ENV.K6_PROJECT_ID,
            // Test runs with the same name groups test runs together
            name: "QE Engineering Template"
        }
    },
    scenarios: {
        test1: {
            executor: 'shared-iterations',
            exec: "getOrder",
            vus: 1,
            iterations: __ENV.ITERATION_OVERRIDE || 1,
            maxDuration: "1m"
        },
        test2: {
            executor: 'shared-iterations',
            exec: "getProduct",
            vus: 1,
            iterations: __ENV.ITERATION_OVERRIDE || 1,
            maxDuration: "1m"
        }
    }
};

export default function() {

}

