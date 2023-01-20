import { QueryBuilder } from "./QueryBuilder";

const queryBuilder = new QueryBuilder("select * from customers");
queryBuilder.addFilter("id = 100");
queryBuilder.addOrderBy("order by dob");
console.log(queryBuilder.getQuery());

