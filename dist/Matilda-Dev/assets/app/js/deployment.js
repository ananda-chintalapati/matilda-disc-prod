var Deployment = function () {
    
       
    return {
        init: function () {
          0 !== $("#m_datatable").length && $(".my_datatable").mDatatable({ data: {
                    type: "remote",
                    source: {
                        read: {
                         
                            url: 'http://192.168.20.220:6003/matilda/management/deployments',
                            method: 'GET',
                           
                            
                            map: function(raw) {
                              // sample data mapping
                              var dataSet = raw.deployments;
                              console.log(dataSet);
                              return dataSet;
                          }
                        }
                    }     
                },
                layout: {
                    theme: "default",
                    class: "",
                    scroll: true,
                    height: 400,
                    footer: false
                },
                sortable: true,
                filterable: true,
                pagination: true,
                columns: [ {
                  field: "cloud_provider",
                  title: "Cloud Provider",
                  
                  filterable: !1,
                  width: 150
                  }, 
                  {
                    field: "name",
                    title: "Name",
                    
                    width: 150
                    },
                    {
                      field: "project",
                      title: "Project",
                      
                  
                      width: 250
                     
                      },
                      {
                        field: "region",
                        title: "Region",
                       
                        filterable: !1,
                        width: 150
                        },
                        {
                          field: "type",
                          title: "Environment",
                      
                          filterable: !1,
                          width: 150
                          },
                  {
                    field: "status",
                    title: "Status",
                    width: 100,
                    
                    template: function (e) {
                        var t = {
                           Active: {
                                title: "Active",
                                class: " m-badge--success"
                            },
                            Failed: {
                              title: "Failed",
                              class: " m-badge--danger"
                          },
                          InProgress: {
                            title: "Failed",
                            class: " m-badge--warning"
                        }
                           
                        };
                        return '<span class="m-badge ' + t[e.status].class + ' m-badge--wide">' + t[e.status].title + "</span>"
                    }
                },
                {
                  field: "create_date",
                  title: "Create Date",
                 
                  filterable: !1,
                  width: 150
                  },
                  {
                    
                      field: "Actions",
                      width: 110,
                      title: "Actions",
                      sortable: !1,
                      overflow: "visible",
                      template: function (e, t, a) {
                          return '<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Update"> <i class="la la-leaf"></i> </a>    <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Clone"><i class="la la-edit"></i></a>      <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">  <i class="la la-trash"></i>  </a> '                    
                      }
                  }
                  
               
              ]
              })
        }
    }
}();
jQuery(document).ready(function () {
    Deployment.init()
});