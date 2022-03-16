import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: 'Company';
  /** кол-во средств на балансе компании */
  balance: Scalars['Float'];
  /** контракты */
  contracts: Array<Contract>;
  /** долг */
  debt: Scalars['Float'];
  /** firebase doc id */
  id: Scalars['String'];
  /** расположение штаб-квартиры */
  location: Scalars['String'];
  /** url логотипа */
  logo: Scalars['String'];
  /** название компании */
  name: Scalars['String'];
  /** firebase doc id */
  owner: Scalars['String'];
  /** производство */
  production?: Maybe<Production>;
  /** дата основания компании */
  registered: Scalars['Float'];
  /** склады */
  warehouses: Array<Warehouse>;
  /** рабочая сила */
  workers: Workers;
};

export type Contract = {
  __typename?: 'Contract';
  /** исполнитель (компания) */
  contractor: Scalars['String'];
  /** заказчик (компания) */
  customer: Scalars['String'];
  /** окончание контракта */
  end: Scalars['Float'];
  /** контракт выполнен */
  fulfilled: Scalars['Boolean'];
  id: Scalars['String'];
  /** поставляемый продукт */
  product: Product;
  /** начало контракта */
  start: Scalars['Float'];
  /** общее кол-во поставляемого продукта */
  totalCount: Scalars['Float'];
};

export type FiltersInput = {
  condition: Scalars['String'];
  field: Scalars['String'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Scalars['String'];
  createUser: Scalars['String'];
  pushUserCompany: Scalars['Boolean'];
  transferBalanceToCompany: Scalars['Int'];
};


export type MutationCreateCompanyArgs = {
  location: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: Scalars['String'];
};


export type MutationCreateUserArgs = {
  vkUserID: Scalars['Float'];
};


export type MutationPushUserCompanyArgs = {
  companyID: Scalars['String'];
  docID: Scalars['String'];
};


export type MutationTransferBalanceToCompanyArgs = {
  companyID: Scalars['String'];
  docID: Scalars['String'];
  value: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  /** затраты ресурсов на 1 ед. продукта */
  requires: Array<ProductRequirements>;
  /** требование высшее образование */
  requiresHighEducation: Scalars['Boolean'];
  /** сколько места занимает 1 ед. продукта */
  spaceRequirements: Scalars['Float'];
  /** затраты времени на 1 ед. продукта */
  timeCosts: Scalars['Float'];
  /** стоимость транспортировки 1 ед. продукта */
  transportationCost: Scalars['Float'];
  /** производимый ресурс */
  type: Scalars['String'];
  /** кол-во работников для производства 1 ед. ресурса за период */
  workersPerProduct: Scalars['Float'];
};

export type ProductRequirements = {
  __typename?: 'ProductRequirements';
  count: Scalars['Float'];
  type: Scalars['String'];
};

export type Production = {
  __typename?: 'Production';
  /** автоматическая поставка по контракту */
  contracts: Scalars['String'];
  /** производимый продукт */
  type: Product;
};

export type Query = {
  __typename?: 'Query';
  company?: Maybe<Company>;
  getAllCompanies: Array<Company>;
  getProductMeta: Array<Product>;
};


export type QueryCompanyArgs = {
  id: Scalars['String'];
};


export type QueryGetAllCompaniesArgs = {
  filters?: InputMaybe<Array<FiltersInput>>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  /** хранимые ресурсы */
  stored: WarehouseProduct;
  /** общая вместимость */
  total: Scalars['Float'];
};

export type WarehouseProduct = {
  __typename?: 'WarehouseProduct';
  /** хранимое кол-во */
  count: Scalars['Float'];
  /** затраты ресурсов на 1 ед. продукта */
  requires: Array<ProductRequirements>;
  /** требование высшее образование */
  requiresHighEducation: Scalars['Boolean'];
  /** сколько места занимает 1 ед. продукта */
  spaceRequirements: Scalars['Float'];
  /** затраты времени на 1 ед. продукта */
  timeCosts: Scalars['Float'];
  /** стоимость транспортировки 1 ед. продукта */
  transportationCost: Scalars['Float'];
  /** производимый ресурс */
  type: Scalars['String'];
  /** кол-во работников для производства 1 ед. ресурса за период */
  workersPerProduct: Scalars['Float'];
};

export type Workers = {
  __typename?: 'Workers';
  highEducated: Scalars['Float'];
  total: Scalars['Float'];
};

export type CreateCompanyMutationVariables = Exact<{
  logo: Scalars['String'];
  owner: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: string };

export type PushUserCompanyMutationVariables = Exact<{
  docID: Scalars['String'];
  companyID: Scalars['String'];
}>;


export type PushUserCompanyMutation = { __typename?: 'Mutation', pushUserCompany: boolean };

export type TransferBalanceToCompanyMutationVariables = Exact<{
  docID: Scalars['String'];
  companyID: Scalars['String'];
  value: Scalars['Float'];
}>;


export type TransferBalanceToCompanyMutation = { __typename?: 'Mutation', transferBalanceToCompany: number };

export type CreateUserMutationVariables = Exact<{
  vkUserId: Scalars['Float'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: string };

export type GetAllCompaniesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FiltersInput> | FiltersInput>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllCompaniesQuery = { __typename?: 'Query', getAllCompanies: Array<{ __typename?: 'Company', id: string, name: string, logo: string }> };

export type CompanyQueryVariables = Exact<{
  companyId: Scalars['String'];
}>;


export type CompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', id: string, name: string, location: string, logo: string, owner: string, balance: number, registered: number, workers: { __typename?: 'Workers', highEducated: number, total: number }, contracts: Array<{ __typename?: 'Contract', id: string }>, warehouses: Array<{ __typename?: 'Warehouse', total: number, stored: { __typename?: 'WarehouseProduct', count: number, spaceRequirements: number } }>, production?: { __typename?: 'Production', type: { __typename?: 'Product', type: string } } | null } | null };

export type GetProductMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductMetaQuery = { __typename?: 'Query', getProductMeta: Array<{ __typename?: 'Product', type: string, timeCosts: number, requires: Array<{ __typename?: 'ProductRequirements', type: string, count: number }> }> };


export const CreateCompanyDocument = gql`
    mutation CreateCompany($logo: String!, $owner: String!, $location: String!, $name: String!) {
  createCompany(logo: $logo, owner: $owner, location: $location, name: $name)
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      logo: // value for 'logo'
 *      owner: // value for 'owner'
 *      location: // value for 'location'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const PushUserCompanyDocument = gql`
    mutation pushUserCompany($docID: String!, $companyID: String!) {
  pushUserCompany(docID: $docID, companyID: $companyID)
}
    `;
export type PushUserCompanyMutationFn = Apollo.MutationFunction<PushUserCompanyMutation, PushUserCompanyMutationVariables>;

/**
 * __usePushUserCompanyMutation__
 *
 * To run a mutation, you first call `usePushUserCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePushUserCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pushUserCompanyMutation, { data, loading, error }] = usePushUserCompanyMutation({
 *   variables: {
 *      docID: // value for 'docID'
 *      companyID: // value for 'companyID'
 *   },
 * });
 */
export function usePushUserCompanyMutation(baseOptions?: Apollo.MutationHookOptions<PushUserCompanyMutation, PushUserCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PushUserCompanyMutation, PushUserCompanyMutationVariables>(PushUserCompanyDocument, options);
      }
export type PushUserCompanyMutationHookResult = ReturnType<typeof usePushUserCompanyMutation>;
export type PushUserCompanyMutationResult = Apollo.MutationResult<PushUserCompanyMutation>;
export type PushUserCompanyMutationOptions = Apollo.BaseMutationOptions<PushUserCompanyMutation, PushUserCompanyMutationVariables>;
export const TransferBalanceToCompanyDocument = gql`
    mutation TransferBalanceToCompany($docID: String!, $companyID: String!, $value: Float!) {
  transferBalanceToCompany(docID: $docID, companyID: $companyID, value: $value)
}
    `;
export type TransferBalanceToCompanyMutationFn = Apollo.MutationFunction<TransferBalanceToCompanyMutation, TransferBalanceToCompanyMutationVariables>;

/**
 * __useTransferBalanceToCompanyMutation__
 *
 * To run a mutation, you first call `useTransferBalanceToCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransferBalanceToCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transferBalanceToCompanyMutation, { data, loading, error }] = useTransferBalanceToCompanyMutation({
 *   variables: {
 *      docID: // value for 'docID'
 *      companyID: // value for 'companyID'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useTransferBalanceToCompanyMutation(baseOptions?: Apollo.MutationHookOptions<TransferBalanceToCompanyMutation, TransferBalanceToCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TransferBalanceToCompanyMutation, TransferBalanceToCompanyMutationVariables>(TransferBalanceToCompanyDocument, options);
      }
export type TransferBalanceToCompanyMutationHookResult = ReturnType<typeof useTransferBalanceToCompanyMutation>;
export type TransferBalanceToCompanyMutationResult = Apollo.MutationResult<TransferBalanceToCompanyMutation>;
export type TransferBalanceToCompanyMutationOptions = Apollo.BaseMutationOptions<TransferBalanceToCompanyMutation, TransferBalanceToCompanyMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($vkUserId: Float!) {
  createUser(vkUserID: $vkUserId)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      vkUserId: // value for 'vkUserId'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetAllCompaniesDocument = gql`
    query GetAllCompanies($filters: [FiltersInput!], $offset: Int) {
  getAllCompanies(filters: $filters, offset: $offset) {
    id
    name
    logo
  }
}
    `;

/**
 * __useGetAllCompaniesQuery__
 *
 * To run a query within a React component, call `useGetAllCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCompaniesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetAllCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>(GetAllCompaniesDocument, options);
      }
export function useGetAllCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>(GetAllCompaniesDocument, options);
        }
export type GetAllCompaniesQueryHookResult = ReturnType<typeof useGetAllCompaniesQuery>;
export type GetAllCompaniesLazyQueryHookResult = ReturnType<typeof useGetAllCompaniesLazyQuery>;
export type GetAllCompaniesQueryResult = Apollo.QueryResult<GetAllCompaniesQuery, GetAllCompaniesQueryVariables>;
export const CompanyDocument = gql`
    query Company($companyId: String!) {
  company(id: $companyId) {
    id
    name
    location
    logo
    owner
    workers {
      highEducated
      total
    }
    balance
    contracts {
      id
    }
    warehouses {
      total
      stored {
        count
        spaceRequirements
      }
    }
    production {
      type {
        type
      }
    }
    registered
  }
}
    `;

/**
 * __useCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useCompanyQuery(baseOptions: Apollo.QueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
      }
export function useCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyQuery, CompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyQuery, CompanyQueryVariables>(CompanyDocument, options);
        }
export type CompanyQueryHookResult = ReturnType<typeof useCompanyQuery>;
export type CompanyLazyQueryHookResult = ReturnType<typeof useCompanyLazyQuery>;
export type CompanyQueryResult = Apollo.QueryResult<CompanyQuery, CompanyQueryVariables>;
export const GetProductMetaDocument = gql`
    query GetProductMeta {
  getProductMeta {
    type
    requires {
      type
      count
    }
    timeCosts
  }
}
    `;

/**
 * __useGetProductMetaQuery__
 *
 * To run a query within a React component, call `useGetProductMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductMetaQuery(baseOptions?: Apollo.QueryHookOptions<GetProductMetaQuery, GetProductMetaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductMetaQuery, GetProductMetaQueryVariables>(GetProductMetaDocument, options);
      }
export function useGetProductMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductMetaQuery, GetProductMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductMetaQuery, GetProductMetaQueryVariables>(GetProductMetaDocument, options);
        }
export type GetProductMetaQueryHookResult = ReturnType<typeof useGetProductMetaQuery>;
export type GetProductMetaLazyQueryHookResult = ReturnType<typeof useGetProductMetaLazyQuery>;
export type GetProductMetaQueryResult = Apollo.QueryResult<GetProductMetaQuery, GetProductMetaQueryVariables>;