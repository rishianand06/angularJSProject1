../node_modules/bootstrap/dist/css/bootstrap.min.css

../node_modules/font-awesome/css/font-awesome.min.css
-----------------------------
1) package.json -

major things:
scripts
dependencies
devDependencies

-----------------------------
webpack - angular comes with webpack (module loader and web server)
gulp  - (module loader and web server)

--------------
2) tslint.json:
static code analyzer

--------------

3) tsconfig.json (tsc)
typescript

-------------------
4) karma.conf.js
-Karma FW 

--------------------
5) protactor.conf.js
- Protactor (e2e test) FW

----------------------
6)angular-cli.json

---------------------------

Angular Architecture

The Class Decorators
 Module consists of.....@ngModule
 
 declarations
 //mention the names of the componenets, directive, pipes, which belongs to a particular module
 
 providers
 //services...
 why alga se becoz -
 singleton
 shared
 Dependency Injection
 
 //exports..(all custom components, directives, pipes etc in other module, then we have to use exports)
 
 //imports...import the other module
 
 //bootstrap....name of your root component
 
 
 BrowserModule - CommonmODULE (ANGULAR CORE)
 
 
1) Component - tag.......@Component

Attributes:
Selector------name of your tag
templateUrl------html file
styleUrls-----css files


2) Directives ......@Directive
@Directive

3) Services .........@Service
@Injectable() and add service name in provider

4) Pipes ...........@Pipe & interface PipeTransform


----------------------------------
Components are not singleton, service are singleton.

-----------------------------

component - view 

view- component

Angular has pre defined data binding

1) Interpolation (component - view)
{{}}

2) Event Binding (view - component)
()

3) One-way binding   (component - view)
Poperty binding
[]

4)Two-way binding    (view/component -> component/view)
[()]

--------------------------------------------
Directives:
*ngFor

====================================
index.html - <app-root>

main.ts

-AppModule (import -ProductModule)

-AppComponent
	- app.component.html - <app-productlist>
	
ProductModule
-ProductComponent (declaration, exports)
		-product.component.html
		
ModelModule
- ProductService (providers)
- CartService

==================================================
Routing:

1) Degine the routes:

/product 	ProductComponent (html)
/cart		CartDetailsComponent (html)
/checkout	CheckoutComponent (html)

RouterModule

2) <router-outlet> tag

3) Navigate to the URL...there are two ways
	1.Programatical Approach
		RouterModule - Roter (Service)
			-navigateByUrl
	
	2.Declarative:
		routerLink.....NOTE:w/o RouterModule import, this will not work.

============================================================

Two way binding (banana in a box)

[(ngModel)]

1)FormsModule...............Note- have to import this module
2) model object
====================================

Angular 2
2 way of form:

1)Template driven - [()]

2)Reactive forms

ReactiveFormModule

- FormGroup class
=========================================




=========================================
JSON Server

JSON - expose - REST Services

1) data.js

2) "json-server":"0.12.1"   - devDepenedencies  - package.json
"json": "json-server data.js -p 3500"    - script - package.json

3) npm run json

/products   - GET
/products/1 - GET
/products {} - POST
/products/1 {} - POST
/products/1 	- DELETE

/orders   - GET
/orders/1 - GET
/orders/ {} - POST
/orders/1 {} - POST
/orders/1 	- DELETE

========================================
AJAX call

HTTPModule

Http - Service

get 
post
put
head
delete

===============================
PRIMENG FW for charts, graphs etc

===============================
ng serve 
-webpack -dev

ng serve -prod....Augury wil not show nothing

DebugTool for Chrome- Augury


ng build...gives dist folder which has 

AOT Compile - FW used to minified the files

ANgular JS 2 Documentation - https://v2.angular.io/docs/ts/latest/

ng build -target=production

=================================

Monolithic Application

Virtulaization

Containerization

From Mainframe to Containers - Part 1 (Diif b/w containerization and virtualization)

Docker - Microsoft







