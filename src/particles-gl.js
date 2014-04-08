/**
* The particles plugin creates a new gameobject "StatelessParticles" to the Kiwi.GameObject object 
*
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class ParticlesGL
*/
Kiwi.Plugins.ParticlesGL = {
  
  /**
  * The name of this plugin.
  * @property name
  * @type String
  * @default 'MyPlugin'
  * @public
  */
  name:'ParticlesGL',

  /**
  * The version of this plugin.
  * @property version
  * @type String
  * @default '1.0.0'
  * @public
  */
  version:'0.9.0'

};

/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.ParticlesGL);


 

 