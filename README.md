# react-for-salesforce
React for Salesforce ISVs


## Install

1. Add packages to VSCode: ESLint, Flow Language Support, Babel ES6/ES7
2. `npm i -g flow-bin` and add to PATH
3. `yarn install`

To test setup run:
`npm run build`
`npm start` and open features/search.html (uses a development build so you can use redux devtools)
`npm run start-prod` and open features/search.html (starts a production build of webpack so doesn't include redux devtools)
`npm test`
`npm run storybook`


## To Use With Salesforce DX
1. Create a `react` folder inside of your DX project and clone this repository into it
2. run the install scripts and check the setup tests all pass
3. Create a new static resource, e.g. called 'react'
4. Uncomment the production build part of webpack (bottom of webpack.config.js), and complete the path to your static resource

In Lightning you can call functions on your entrypoints (mostly just the init functions) by calling SalesforceReact.<bundle_name>.<function_name>, where the exported function name from the entryPoint will be the function you call to initialise in Lightning, e.g. ReactSalesforce.search.init()

For each feature you want to export create a new file in app/entryPoints. Files ending in .prod.js or .dev.js will be ignored to make local development easier

4. Create a Lightning Component with the following code:
component.cmp
```
<aura:component controller="ComponentController" extends="c:baseComponent" access="GLOBAL" implements="flexipage:availableForAllPageTypes">
    
    <ltng:require scripts="{!join(',', 
                            $Resource.react + '/search.bundle.js')}"
                  styles="{!join(',', $Resource.SLDS0121 + '/assets/styles/salesforce-lightning-design-system-ltng.css')}"
                  afterScriptsLoaded="{!c.reactInit}"/>
    
    <div style="background: white"> 
        <div aura:id="container"/>
    </div>
</aura:component>
```

componentController.js 
```
({
    reactInit : function(component, event, helper) {
        var dataService = {
            findAll : $A.getCallback(function(callback) {
                var action = component.get("c.findAll");
                action.setCallback(this, function(a) {
                    var contacts = a.getReturnValue();
                    callback(contacts);
                });
                $A.enqueueAction(action, false);
            }),
            findByName : $A.getCallback(function(name, callback) {
                var action = component.get("c.findByName");
                action.setParams({name: name});
                action.setCallback(this, function(a) {
                    var contacts = a.getReturnValue();
                    callback(contacts);
                });
                $A.enqueueAction(action, false);
            }),
            navigateToSObject: $A.getCallback(function(id, callback) {
                //Code to navigate to another SObject based on the id
				console.log('Navigating to sObject with ID: ' + id);
            })
        }
        
        var container = component.find("container").getElement();
        
		//This uses the webpack output.library and the exported init function from the entrypoint file
		ReactSalesforce.search.init(container, dataService);
    }
})
```

5. Create an APEX class (in this case it's called ComponentController)
ComponentController.cls
```
public with sharing class ComponentController {
    @AuraEnabled
    public static List<Contact> findAll() {
        return [SELECT Id, Name FROM Contact Limit 20];
    }

    @AuraEnabled
    public static List<Contact> findByName(String name) {
        String key = '%' + name + '%';
        return [SELECT Id, Name FROM Contact WHERE Name LIKE :key LIMIT 20]; 
    }
}
```

6. Push the code to your scratch org and add the component to a page to test