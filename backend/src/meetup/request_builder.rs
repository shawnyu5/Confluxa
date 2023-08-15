use super::request::{OperationName, RequestBody, Variables};

/// Builder for building a meetup request
#[derive(Debug)]
pub struct RequestBuilder {
    operation_name: OperationName,
    query: Option<String>,
    first: i32,
    after: Option<String>,
}

impl RequestBuilder {
    /// construct a new request builder
    pub fn new() -> RequestBuilder {
        return RequestBuilder {
            operation_name: OperationName::getYourEventsSuggestedEvents,
            query: None,
            first: 10,
            after: None,
        };
    }

    /// set the query to search for
    pub fn query(&mut self, query: &str) -> &mut Self {
        self.query = Some(query.to_string());
        return self;
    }

    /// number of results to return
    pub fn per_page(&mut self, per_page: i32) -> &mut Self {
        self.first = per_page;
        return self;
    }

    /// set the after cursor
    pub fn after(&mut self, after: Option<String>) -> &mut Self {
        self.after = after;
        return self;
    }

    /// build the request body
    pub fn build(&mut self) -> RequestBody {
        // if a query is supplied, then its a search operation
        if self.query.is_some() {
            self.operation_name = OperationName::eventKeywordSearch
        } else {
            self.operation_name = OperationName::getYourEventsSuggestedEvents
        }
        return RequestBody {
            variables: Variables {
                query: self.query.clone(),
                first: self.first,
                after: self.after.clone(),
                ..Default::default()
            },
            ..RequestBody::new(&self.operation_name) // ..Default::default()
        };
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// test setting query yields the correct request operation name
    #[test]
    fn can_set_query() {
        let request = RequestBuilder::new().query("tech").build();
        assert_eq!(request.variables.query, Some("tech".to_string()));
        // setting a query should mean its a keyword search
        assert_eq!(
            request.operationName,
            OperationName::eventKeywordSearch.to_string()
        );
    }

    /// test not setting query after yields the correct request operation name
    #[test]
    fn get_suggested_events_by_default() {
        let request = RequestBuilder::new().per_page(20).build();
        assert_eq!(request.variables.first, 20);
        // default operation name is getYourEventsSuggestedEvents without setting query
        assert_eq!(
            request.operationName,
            OperationName::getYourEventsSuggestedEvents.to_string()
        );
    }
}
