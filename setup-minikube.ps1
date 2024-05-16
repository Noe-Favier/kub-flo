echo "##########################################"
winget install Kubernetes.minikube
echo "##########################################"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 
echo "##########################################"
minikube config set driver docker
echo "##########################################"
minikube delete
echo "##########################################"
minikube start --vm-driver=docker

echo "##########################################"
kubectl cluster-info
echo "##########################################"
echo ""
echo "FINI ! "
echo ""