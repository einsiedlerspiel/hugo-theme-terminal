FLAGS= --cleanDestinationDir --disableFastRender

.PHONY:test-server
test-server:
	cd exampleSite; hugo server $(FLAGS) --themesDir ../../

clean:
