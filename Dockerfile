FROM node:latest

RUN apt-get install -y autoconf automake libtool curl make g++ unzip

WORKDIR /tmp

RUN git clone https://github.com/protocolbuffers/protobuf.git
WORKDIR /tmp/protobuf

RUN git submodule update --init --recursive
RUN ./autogen.sh

RUN ./configure
RUN make
RUN make check
RUN make install
RUN ldconfig # refresh shared library cache.


ENTRYPOINT ["tail", "-f", "/dev/null"]
