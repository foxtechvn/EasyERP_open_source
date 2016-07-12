module.exports = {
    LEAD: {
        collectionName: 'Opportunities',

        map: {
            isOpportunitie: {
                name : 'isOpportunitie',
                isRef: false
            },

            'expectedRevenue.value': {
                name : 'expectedRevenue',
                isRef: false
            },

            salesPerson: {
                name      : 'salesPerson',
                isRef     : true,
                collection: 'Employees',
                project   : {$concat: ['$tmp.name.first', ' ', '$tmp.name.last']}
            },

            workflow: {
                name      : 'workflow',
                isRef     : true,
                collection: 'workflows',
                project   : '$tmp.name'
            }
        }
    },

    OPPORTUNITIE: {
        collectionName: 'Opportunities',

        map: {
            isOpportunitie: {
                name : 'isOpportunitie',
                isRef: false
            },

            'expectedRevenue.value': {
                name : 'expectedRevenue',
                isRef: false
            },

            salesPerson: {
                name      : 'salesPerson',
                isRef     : true,
                collection: 'Employees',
                project   : {$concat: ['$tmp.name.first', ' ', '$tmp.name.last']}
            },

            workflow: {
                name      : 'workflow',
                isRef     : true,
                collection: 'workflows',
                project   : '$tmp.name'
            }
        }
    }
};
