FROM tomcat:9-jdk11-openjdk-slim

ENV TZ='Europe/Rome'

RUN mkdir -p $CATALINA_HOME/webapps/ROOT/WEB-INF/
WORKDIR $CATALINA_HOME/webapps/ROOT

EXPOSE 8080/tcp

ADD 'https://jdbc.postgresql.org/download/postgresql-42.2.12.jar' $CATALINA_HOME/lib/

COPY target/ROOT.war $CATALINA_HOME/webapps/ROOT.war
RUN jar xf ../ROOT.war; rm -f ../ROOT.war
