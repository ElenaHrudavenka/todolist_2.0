type Filter = 'all' | 'active' | 'done';

type FilterOption = {
    label: string,
    value: Filter,
    width: string,
}

export { type Filter, type FilterOption };
