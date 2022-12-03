#include <iostream>
#include <iterator>
#include <map>
using namespace std;

int main()
{
  int n;
  cin >> n;
  int a[n];
  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
  }
  map<int, int> gquiz1;
  for (int i = 0; i < n; i++)
  {
    if (gquiz1.find(a[i]) == gquiz1.end())
    {
      gquiz1.insert(pair<int, int>(a[i], 1));
    }
    else
    {
      gquiz1[a[i]]++;
    }

    for (auto it = gquiz1.begin(); it != gquiz1.end(); it++)
    {
      cout << it->first << " " << it->second << endl;
    }

    return 0;
  }
}