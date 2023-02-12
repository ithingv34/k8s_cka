(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,e,s){t.exports=s.p+"assets/img/1-11.de812fde.png"},380:function(t,e,s){"use strict";s.r(e);var n=s(44),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"etcd-db-백업-및-복원"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etcd-db-백업-및-복원"}},[t._v("#")]),t._v(" etcd DB 백업 및 복원")]),t._v(" "),n("br"),t._v(" "),n("ul",[n("li",[t._v("쿠버네티스는 분산된 etcd Key-Value 저장소에 클러스터의 "),n("strong",[t._v("선언된 상태")]),t._v("(declared state)와 "),n("strong",[t._v("관찰된 상태")]),t._v("(observed state)를 모두 저장한다.")]),t._v(" "),n("li",[t._v("데이터가 손상된 경우 데이터를 복원하기 위해 "),n("strong",[t._v("백업 계획")]),t._v("을 마련하는 것이 중요하다.")]),t._v(" "),n("li",[t._v("데이터 백업은 데이터 손실을 최소화하기 위해 짧은 시간 내에 주기적으로 수행돼야 한다.")]),t._v(" "),n("li",[n("code",[t._v("스냅샷 파일")]),t._v("에 etcd 데이터를 저장하고 언제든지 복원할 때 사용할 수 있다.")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("etcd 백업 & 복원 프로세스")])]),t._v(" "),n("img",{attrs:{src:s(363)}}),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("클러스터 토폴로지에 따라 하나 이상의 etcd 인스턴스로 구성될 수 있다. 이 예제에서는 단일 노드 etcd 클러스터 설정에 대해 설명한다. 자세한 내용은 "),n("a",{attrs:{href:"https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서"),n("OutboundLink")],1),t._v("를 참고한다.")])]),t._v(" "),n("p",[n("strong",[t._v("백업")])]),t._v(" "),n("ol",[n("li",[t._v("etcd를 호스팅하는 시스템 노드에 ssh로 접속한다.")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" kube-control-plane\nWelcome to Ubuntu "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.04")]),t._v(".5 LTS "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU/Linux "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.15")]),t._v(".0-132-generic x86_64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("etcdctl 버전을 체크한다.\n"),n("ul",[n("li",[t._v("현재 3.4.14 버전")])])])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ etcdctl version\netcdctl version: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),t._v(".14\nAPI version: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("etcd는 "),n("code",[t._v("kube-system")]),t._v(" 네임스페이스에 Pod로 배포된 상태이다. Pod에  describe 명령어를 사용해 version을 확인해보자.")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ kubectl get pods -n kube-system\nNAME                                       READY   STATUS    RESTARTS   AGE\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\netcd-kube-control-plane                    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1     Running   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          33m\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n$ kubectl describe pod etcd-kube-control-plane -n kube-system\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nContainers:\n  etcd:\n    Container ID:  docker://28325c63233edaa94e16691e8082e8d86f5e7da58c0fb54 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    d95d68dec6e80cf54\n    Image:         k8s.gcr.io/etcd:3.4.3-0\n    Image ID:      docker-pullable://k8s.gcr.io/etcd@sha256:4afb99b4690b418 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    ffc2ceb67e1a17376457e441c1f09ab55447f0aaf992fa646\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n      --cert-file"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/server.crt\n      --key-file"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/server.key\n      --listen-client-urls"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/server.key\n      --trusted-ca-file"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/pki/etcd/ca.crt\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),n("ul",[n("li",[t._v("localhost")])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("etcd 복원")])]),t._v(" "),n("ul",[n("li",[t._v("백업에서 etcd를 복원하려면 "),n("code",[t._v("etcdctl snapshot restore")]),t._v(" 명령")])])])}),[],!1,null,null,null);e.default=a.exports}}]);