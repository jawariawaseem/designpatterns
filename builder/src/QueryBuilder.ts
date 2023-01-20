export class QueryBuilder{

    private _filter: string;
    private _orderBy: string;
    private _table : string;

    constructor(table: string){
        this._table = table;
    }

    public addFilter(filter: string){
        this._filter = filter;
        return this;
    }
    
    public addOrderBy(orderBy: string){
        this._orderBy = orderBy;
        return this;
    }

    public getQuery(){
        return `${this._table} where ${this._filter ?? ""} ${this._orderBy ?? ""}`;
    }
}