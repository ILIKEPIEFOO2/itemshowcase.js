String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
events.listen("player.chat", function(event) {
    if (event.message.indexOf("{item}") != -1) {
		event.server.scheduleInTicks(1, function(callbackEvent) {
			var mainItem = event.player.mainHandItem;
			event.server.tell(text.of(mainItem.id.toString()).hover(text.of(
				"User: " + event.player.name +
				"\nName: " + mainItem.name +
				"\nCount: " + mainItem.count +
				"\nID: " + mainItem.id.toString()) +
				"\nLore: " + mainItem.lore +
				"\nEnchantments: " + mainItem.enchantments +
				"\nNBT: " + mainItem.nbt
			).blue());
		});
        
    }
});
