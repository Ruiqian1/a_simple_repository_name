import urllib2
from bs4 import BeautifulSoup

def parse_text(urls):
    text_file = open("school_info.txt", "w")
    for url in urls:
        # Get school name and school's reddit url
        school_name = url.next[1:]
        school_url = url["href"]

        # Extract the abbreviation
        prefix = "http://www.reddit.com/r/"
        prefix_len = len(prefix)

        abbr = school_url[prefix_len:len(school_url)-1]

        # In case of different prefix, check if the abbr starts with /
        if(len(abbr) > 0 and abbr[0]=='/'):
            abbr = abbr[1:]
        # Write the lower case of the abbr into the text file
        text_file.write(abbr.lower())
        text_file.write("\n")

        # Try to write the school name into the text file
        try:
            text_file.write(str(school_name))
        except ValueError:
            # If we run into an Error, write &&&, the flag value
            print "Error"
            text_file.write("&&&")

        text_file.write("\n")

def scrape():
    page = urllib2.urlopen('https://www.reddit.com/r/college/wiki/faq').read()
    soup = BeautifulSoup(page)
    soup.prettify()

    # Get all <a> tags
    all_urls = soup.findAll('a', href=True)

    first_school_idx = 0
    last_school_idx = 0

    # Get urls from the first college to the last one
    for i in range(len(all_urls)):
    	if all_urls[i]['href'] == "http://www.reddit.com/r/aberystwyth/":
    		first_school_idx = i
    	if all_urls[i]['href'] == "http://www.reddit.com/r/yorku/":
    		last_school_idx = i

    	if first_school_idx != 0 and last_school_idx != 0:
    		break;

    # Remove non relevant urls
    all_urls = all_urls[first_school_idx:last_school_idx + 1]

    parse_text(all_urls)

def main():
    scrape()

if __name__ == "__main__":
    main()
