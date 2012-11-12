if (Meteor.is_client) {

  /*
  Routing
   */
  
  jovialRouter = FilteredRouter.extend({
    initialize: function() {
      FilteredRouter.prototype.initialize.call(this);
    },
    routes: {
      'home': 'home',
      'Home': 'home',
      '': 'home',
      'contact': 'contact',
      'Contact': 'contact',
      'about': 'about',
      'About': 'about',
      'dashboard': 'dashboard',
      'Dashboard': 'dashboard'
    },
    home: function() { 
    	Template.hero.title = 'Home';
    	Template.hero.description = 'This is the home screen';
    	Template.home.item = [
    		{ heading: 'About', button: 'Learn about us', link: '../about', text: 'We are passionate coffee lovers who care about the customer experience' }, 
    		{ heading: 'Contact', button: 'Contact us', link: '../contact', text: 'If you want to get started or just learn more send us a message'}, 
    		{ heading: 'Dashboard', button: 'Try it out', link: '../dashboard', text: 'We make running your business incredibly easy through strong analysis tools, taylored specifically for the specialty shop'}
    	];
    	this.goto('home'); 
    },
    contact: function() {  
    	Template.hero.title = 'Contact';
    	Template.hero.description = 'If you want to get started or just learn more send us a message';
    	Template.contact.item = [
    		{ heading: 'Email', button: 'Send Email', link: "javascript:alert('this should send to an email')", text: 'Send us an email with any questions or inquiries' }, 
    		{ heading: 'Phone', button: 'Text or Call', link: "javascript:alert('Our number is 901-603-1083. Call anytime!')", text: 'Feel free to call or text us to get in touch'}, 
    		{ heading: 'Connect', button: 'Follow', link: 'http://blog.jovios.com', text: 'Find out what we are up to and all the interesting news that is happening in specialty shop world'}
    	];
    	this.goto('contact'); 
    },
    about: function() {  
    	Template.hero.title = 'About';
    	Template.hero.description = 'We are passionate coffee lovers who care about the customer experience';
    	Template.about.item = [
    		{ heading: 'David Geisert', button: 'Read the Blog', link: 'http://blog.jovios.com', text: 'I am a senior product manager at Zynga, meaning that I know that social space and how to design an easily used, and compelling product.' }, 
    		{ heading: 'Bozhao Yu', button: 'Read the Blog', link: 'http://blog.jovios.com', text: 'I have started several companies, mainly out of coffee shops.  I am ready to bring my talents to use for the people who have let me code away in their establishments all along.'}, 
    		{ heading: 'Join the Team', button: 'Contact Us', link: '../contact', text: 'If you are interested in joining our team then contact us'}
    	];
    	this.goto('about'); 
    },
    dashboard: function() {  
    	Template.hero.title = 'Dashboard';
    	Template.hero.description = 'We make running your business incredibly easy through strong analysis tools, taylored specifically for the specialty shop';
    	this.goto('dashboard'); 
    }
  })
  

  var Router = new jovialRouter();
  Meteor.startup(function() {
    Backbone.history.start({pushState: true});
  });
  
  Template.nav.pages = [ {page: 'Home'}, {page: 'Contact'}, {page: 'About'}, {page: 'Dashboard'} ];

};



//sample data stuff on dashboard until login.  