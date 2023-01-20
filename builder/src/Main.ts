import { QueryBuilder } from "./QueryBuilder";

console.log("Provides you flexibility to only specify properties that are required without a reason of passing extra argument in constructor. If we have a complex object, we can build it in parts. Gang of four define it as separate Construction of objects from representation");

const queryBuilder = new QueryBuilder("select * from customers");
queryBuilder.addFilter("id = 100");
queryBuilder.addOrderBy("order by dob");
console.log(queryBuilder.getQuery());

